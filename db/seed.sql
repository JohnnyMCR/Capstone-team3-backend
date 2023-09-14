\c carevillage_dev;

INSERT INTO profiles (username, password, address, email)
VALUES
  ('john_doe', 'passwword1', '123 Main St', 'john@example.com'),
  ('jane_smith', 'password2', '456 Elm Ave', 'jane@example.com');

INSERT INTO forums (user_id, title, content, date, category)
VALUES
  (1, 'Introduction to Programming', 'Hello everyone! I wanted to share my excitement about learning programming.', '2023-08-01 00:00:00', 'Technology'),
  (1, 'Favorite Programming Languages', 'What are your favorite programming languages and why?', '2023-08-05 00:00:00', 'Technology');
  

INSERT INTO comments (post_id, user_id, content, date)
VALUES
  (1, 2, 'I completely agree! Learning programming is such an exciting journey.', '2023-08-02'),
  (2, 2, 'I love Python for its simplicity and versatility.', '2023-08-06');

  INSERT INTO categories (name)
VALUES
    ('Newborn'),
    ('Expecting'),
    ('Only Parent');

INSERT INTO donations (user_id, category, title, description, date)
VALUES
  (1, 'Charity', 'Supporting Local Food Drive', 'Donating non-perishable food items for the community food drive.', '2023-08-10'),
  (1, 'Education', 'Donating Books for Local School', 'Contributing books for the school library to encourage reading among students.', '2023-08-15');




