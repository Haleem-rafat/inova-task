export interface IcoursesList {
  data: Daum[];
  meta: Meta;
  links: Links;
}

export interface Daum {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  name: string;
  description: any;
  available_on: string;
  slug: string;
  meta_description: any;
  meta_keywords: any;
  updated_at: string;
  sku: string;
  purchasable: boolean;
  in_stock: boolean;
  backorderable: boolean;
  available: boolean;
  currency: string;
  price: number;
  display_price: string;
  compare_at_price: number;
  display_compare_at_price: string;
  product_type: string;
  avg_review: number;
  num_of_reviews: number;
  course: Course;
  is_available_to_purchase: boolean;
  is_purchased_by_current_user: boolean;
  is_added_to_cart_by_current_user: boolean;
}

export interface Course {
  type: string;
  course_id: number;
  title: string;
  description: string;
  image_url: string;
  product_id: number;
  video_url: string;
  video_ext: string;
  host_type: string;
  start_date: string;
  end_date: string;
  level: Level;
  availability: Availability;
  sections_count: number;
  sessions_count: number;
  duration_in_hours: number;
  average_sessions_per_section: number;
  average_hours_per_session: number;
  number_of_objectives: number;
  first_section_and_session_ids: FirstSectionAndSessionIds;
  sections: Section[];
}

export interface Level {
  value: string;
  translation: string;
}

export interface Availability {
  value: string;
  translation: string;
}

export interface FirstSectionAndSessionIds {
  first_section_id: number;
  first_course_session_id: number;
}

export interface Section {
  section_id: number;
  course_id: number;
  title: string;
  position: number;
  is_posted: boolean;
  course_name: string;
  sessions: Session[];
}

export interface Session {
  course_session_id: number;
  is_blocked: boolean;
  is_discussion_form_enabled: boolean;
  section_id: number;
  title: string;
  position: number;
  expected_time: number;
  expected_time_unit: string;
  content_type: string;
  content_type_display: string;
  hosted_video: any;
  text: string;
}

export interface Relationships {
  variants: Variants;
  option_types: OptionTypes;
  product_properties: ProductProperties;
  taxons: Taxons;
  images: Images;
  default_variant: DefaultVariant;
  primary_variant: PrimaryVariant;
}

export interface Variants {
  data: any[];
}

export interface OptionTypes {
  data: any[];
}

export interface ProductProperties {
  data: any[];
}

export interface Taxons {
  data: Daum2[];
}

export interface Daum2 {
  id: string;
  type: string;
}

export interface Images {
  data: any[];
}

export interface DefaultVariant {
  data: Data;
}

export interface Data {
  id: string;
  type: string;
}

export interface PrimaryVariant {
  data: Data2;
}

export interface Data2 {
  id: string;
  type: string;
}

export interface Meta {
  count: number;
  total_count: number;
  total_pages: number;
  filters: Filters;
}

export interface Filters {
  option_types: any[];
  product_properties: any[];
}

export interface Links {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
}

export interface CoursesOverView {
  data: Data;
}

export interface Data {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  name: string;
  description: any;
  available_on: string;
  slug: string;
  meta_description: any;
  meta_keywords: any;
  updated_at: string;
  sku: string;
  purchasable: boolean;
  in_stock: boolean;
  backorderable: boolean;
  available: boolean;
  currency: string;
  price: number;
  display_price: string;
  compare_at_price: number;
  display_compare_at_price: string;
  product_type: string;
  avg_review: number;
  num_of_reviews: number;
  course: Course;
  is_available_to_purchase: boolean;
  is_purchased_by_current_user: boolean;
  is_added_to_cart_by_current_user: boolean;
}

export interface Course {
  type: string;
  course_id: number;
  title: string;
  description: string;
  image_url: string;
  product_id: number;
  video_url: string;
  video_ext: string;
  host_type: string;
  start_date: string;
  end_date: string;
  level: Level;
  availability: Availability;
  sections_count: number;
  sessions_count: number;
  duration_in_hours: number;
  average_sessions_per_section: number;
  average_hours_per_session: number;
  number_of_objectives: number;
  first_section_and_session_ids: FirstSectionAndSessionIds;
  sections: Section[];
}

export interface Level {
  value: string;
  translation: string;
}

export interface Availability {
  value: string;
  translation: string;
}

export interface FirstSectionAndSessionIds {
  first_section_id: number;
  first_course_session_id: number;
}

export interface Section {
  section_id: number;
  course_id: number;
  title: string;
  position: number;
  is_posted: boolean;
  course_name: string;
  sessions: Session[];
}

export interface Session {
  course_session_id: number;
  is_blocked: boolean;
  is_discussion_form_enabled: boolean;
  section_id: number;
  title: string;
  position: number;
  expected_time: number;
  expected_time_unit: string;
  content_type: string;
  content_type_display: string;
  hosted_video: any;
  text: string;
}

export interface Relationships {
  variants: Variants;
  option_types: OptionTypes;
  product_properties: ProductProperties;
  taxons: Taxons;
  images: Images;
  default_variant: DefaultVariant;
  primary_variant: PrimaryVariant;
}

export interface Variants {
  data: any[];
}

export interface OptionTypes {
  data: any[];
}

export interface ProductProperties {
  data: any[];
}

export interface Daum {
  id: string;
  type: string;
}

export interface Images {
  data: any[];
}

export interface Data2 {
  id: string;
  type: string;
}

export interface PrimaryVariant {
  data: Data3;
}

export interface Data3 {
  id: string;
  type: string;
}
