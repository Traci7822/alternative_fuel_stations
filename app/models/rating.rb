class Rating < ActiveRecord::Base
  belongs_to :station
  belongs_to :user
end
