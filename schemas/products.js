export default {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "stripePriceId",
      type: "string",
      title: "Stripe Price Id",
    },
    {
      name: "image",
      type: "object",
      title: "Image",
      fields: [
        { name: "mobile", type: "image", title: "mobile" },
        { name: "tablet", type: "image", title: "tablet" },
        { name: "desktop", type: "image", title: "desktop" },
      ],
    },
    {
      name: "suggestedImage",
      type: "object",
      title: "Suggested Image",
      fields: [
        { name: "mobile", type: "image", title: "mobile" },
        { name: "tablet", type: "image", title: "tablet" },
        { name: "desktop", type: "image", title: "desktop" },
      ],
      description:
        "This image shows up under the suggested products section on every product page",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "new",
      type: "boolean",
      title: "New",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "features",
      type: "string",
      title: "Features",
    },
    {
      name: "includes",
      type: "array",
      title: "Includes",
      description: "What comes in the box?",
      of: [{ type: "includes" }],
    },
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [{ type: "image" }],
    },
  ],
  initialValue: {
    new: false,
  },
};
