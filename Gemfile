# Gemfile for GitHub Pages
source "https://rubygems.org"

# GitHub Pages gem
gem "github-pages", group: :jekyll_plugins

# Additional Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
  gem "jekyll-compress-images", git: "https://github.com/valerijaspasojevic/jekyll-compress-images.git"
end

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock jekyll version for GitHub Pages compatibility
gem "jekyll", "~> 3.9.0"

# Additional gems for enhanced functionality
gem "kramdown-parser-gfm"
gem "rouge"
gem "liquid", "~> 4.0"