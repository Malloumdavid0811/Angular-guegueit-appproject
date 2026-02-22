terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "= 5.65.0"
    }
  }
  required_version = "1.13.4"
}

provider "aws" {
  region     = "us-east-1"
  access_key = ""
  secret_key = ""
}

resource "aws_instance" "myec2" {
  ami           = "ami-0dbc3d7bc646e8516"
  instance_type = "t2.medium"
  key_name      = "guegueit-app"
  tags = {
    Name = "guegueitapp"
  }
}