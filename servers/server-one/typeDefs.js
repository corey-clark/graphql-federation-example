const { gql } = require("apollo-server");

const typeDefs = gql`
  type Drug @key(fields: "id") {
    id: ID
    label_type: String
    label: Label
    form: Form
    dosage: Dosage
    singular_display: String
    plural_display: String
    quantities: [Int]
    image: Image
    lifecycle: String
    display_info: DisplayInfo
    default_quantity: Int
    schedule: Int
  }

  type Label {
    name: String
    slug: String
  }

  type Form {
    name: String
    singular: String
    plural: String
    slug: String
  }

  type Dosage {
    name: String
    slug: String
  }

  type Image {
    src: String
    alt_text: String
    width: String
    height: String
  }

  type DisplayInfo {
    show_seo_price_text: Boolean
    show_compare_class_text: Boolean
    has_medicare_prices: Boolean
    savings_tips_count: Int
    has_drug_info: Boolean
    has_side_effects: Boolean
    has_images: Boolean
    news_count: Int
    image_count: Int
  }

  type Query {
    getDrugById(id: ID!): Drug
  }
`;

module.exports = typeDefs;
