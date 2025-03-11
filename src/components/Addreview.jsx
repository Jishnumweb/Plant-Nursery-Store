import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Rating from "react-rating-stars-component";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;
    const newReview = { name, rating, comment, date: new Date().toLocaleString() };
    // Reset fields after submission
    setName("");
    setRating(0);
    setComment("");
    console.log(newReview);
    
  };

  return (
    <Card className="p-3 mt-3">
      <h5>Leave a Review</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Rating
            count={5}
            value={rating}
            size={30}
            onChange={(newRating) => setRating(newRating)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">Submit Review</Button>
      </Form>
    </Card>
  );
};

export default ReviewForm;
