provider "google" {
  credentials = file("~/account.json")
  version     = "~> 3.5.0"
  region      = "europe-west2"
  project     = var.project_id
}

provider "google-beta" {
  credentials = file("~/account.json")
  version     = "~> 3.5.0"
  region      = "europe-west2"
  project     = var.project_id
}