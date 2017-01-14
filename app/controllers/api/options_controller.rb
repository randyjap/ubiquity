class Api::OptionsController < ApplicationController
  def index
    @brands = Brand.all.pluck(:name)
    @categories = Category.all.pluck(:name)
  end
end
