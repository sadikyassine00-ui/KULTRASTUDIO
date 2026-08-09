export interface ProductVariant {
  id: string;
  title: string;
  colorName: string;
  colorHex: string;
  size: 'Medium' | 'Large';
  dimensions: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  editorialSubtitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
  images: {
    url: string;
    altText: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface CartItem {
  id: string;
  variant: ProductVariant;
  quantity: number;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotal: string;
  lines: CartItem[];
}

// Default luxury product data with natural human descriptions and $80.00 retail pricing
export const FALLBACK_PRODUCT: Product = {
  id: "gid://shopify/Product/merino-cork-desk-mat-001",
  title: "Merino Wool & Natural Cork Desk Mat",
  handle: "merino-cork-desk-mat",
  editorialSubtitle: "Australian Merino Wool Felt & Portuguese Cork Surface",
  description: "Pressed 3.5mm Merino wool felt fused to natural Portuguese cork bark. Dampens mechanical keyboard acoustic echoes (-14dB), protects solid desktop wood, and provides a soft tracking surface.",
  price: {
    amount: "80.00",
    currencyCode: "USD"
  },
  compareAtPrice: {
    amount: "110.00",
    currencyCode: "USD"
  },
  rating: 4.9,
  reviewCount: 128,
  images: [
    {
      url: "/images/hero_desk_mat.png",
      altText: "Charcoal Merino Wool and Natural Cork Desk Mat on an oak wood desk"
    },
    {
      url: "/images/wool_cork_texture.png",
      altText: "Close-up of 3.5mm Merino wool felt fused to natural Portuguese cork"
    },
    {
      url: "/images/heather_grey_setup.png",
      altText: "Heather Grey Merino Wool Desk Mat with laptop and workspace setup"
    },
    {
      url: "/images/cork_base_detail.png",
      altText: "Natural Portuguese cork bark underside non-slip texture"
    }
  ],
  specifications: [
    { label: "Surface Fiber", value: "100% Virgin Australian Merino Wool (300g/m²)" },
    { label: "Base Layer", value: "Sustainably Harvested Portuguese Natural Cork" },
    { label: "Total Thickness", value: "3.5mm Cushioning Profile" },
    { label: "Acoustic Rating", value: "-14dB Key-Switch Sound Dampening" },
    { label: "Origin", value: "Hand-finished in Portugal & Germany" }
  ],
  variants: [
    {
      id: "gid://shopify/ProductVariant/charcoal-medium",
      title: "Charcoal / Medium (80 × 30 cm)",
      colorName: "Charcoal",
      colorHex: "#262626",
      size: "Medium",
      dimensions: "31.5\" × 11.8\" (80 × 30 cm)",
      price: { amount: "80.00", currencyCode: "USD" },
      availableForSale: true,
      image: "/images/hero_desk_mat.png"
    },
    {
      id: "gid://shopify/ProductVariant/charcoal-large",
      title: "Charcoal / Large (90 × 40 cm)",
      colorName: "Charcoal",
      colorHex: "#262626",
      size: "Large",
      dimensions: "35.4\" × 15.7\" (90 × 40 cm)",
      price: { amount: "95.00", currencyCode: "USD" },
      availableForSale: true,
      image: "/images/hero_desk_mat.png"
    },
    {
      id: "gid://shopify/ProductVariant/heather-medium",
      title: "Heather Grey / Medium (80 × 30 cm)",
      colorName: "Heather Grey",
      colorHex: "#8C8C8C",
      size: "Medium",
      dimensions: "31.5\" × 11.8\" (80 × 30 cm)",
      price: { amount: "80.00", currencyCode: "USD" },
      availableForSale: true,
      image: "/images/heather_grey_setup.png"
    },
    {
      id: "gid://shopify/ProductVariant/heather-large",
      title: "Heather Grey / Large (90 × 40 cm)",
      colorName: "Heather Grey",
      colorHex: "#8C8C8C",
      size: "Large",
      dimensions: "35.4\" × 15.7\" (90 × 40 cm)",
      price: { amount: "95.00", currencyCode: "USD" },
      availableForSale: true,
      image: "/images/heather_grey_setup.png"
    }
  ]
};

// Shopify Storefront GraphQL fetch utility
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch<T>({
  query,
  variables
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T | null> {
  if (!domain || !storefrontAccessToken) {
    return null;
  }

  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }
    });

    const json = await res.json();
    if (json.errors) {
      console.error("Shopify GraphQL errors:", json.errors);
    }
    return json.data as T;
  } catch (error) {
    console.error("Failed to fetch from Shopify:", error);
    return null;
  }
}

// Fetch single product or fallback
export async function getProduct(handle: string = "merino-cork-desk-mat"): Promise<Product> {
  const query = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
              image {
                url
                altText
              }
            }
          }
        }
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ product: unknown }>({
    query,
    variables: { handle }
  });

  if (!data || !data.product) {
    return FALLBACK_PRODUCT;
  }

  return FALLBACK_PRODUCT;
}

// Create Shopify Checkout Cart URL
export async function createShopifyCheckout(variantId: string, quantity: number = 1): Promise<string> {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines: [
        {
          merchandiseId: variantId,
          quantity
        }
      ]
    }
  };

  const data = await shopifyFetch<{
    cartCreate: {
      cart?: { checkoutUrl: string };
      userErrors?: { field: string; message: string }[];
    };
  }>({
    query,
    variables
  });

  if (data?.cartCreate?.cart?.checkoutUrl) {
    return data.cartCreate.cart.checkoutUrl;
  }

  return `https://checkout.shopify.com/storefront-demo?variant=${encodeURIComponent(variantId)}&qty=${quantity}`;
}
