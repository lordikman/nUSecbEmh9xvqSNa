terraform {
  backend "gcs" {
    bucket      = "airlines-bucket"
    prefix      = "terraform/state"
    credentials = "~/account.json"
  }
}