class User <ApplicationRecord
    has_secure_password
    validates :name, uniqueness: { message: 'Please use another name'}
end