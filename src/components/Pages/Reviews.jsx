import React from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Slide } from "react-reveal";
import "tailwindcss/tailwind.css";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      picture:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      rating: 5,
      comment:
        "Great selection and excellent customer service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      picture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      rating: 4,
      comment:
        "I love the variety of toy cars available. The prices are also reasonable.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      picture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      rating: 3,
      comment: "Decent collection, but some cars were out of stock.",
    },
    {
      id: 4,
      name: "Emily Anderson",
      picture:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      rating: 5,
      comment: "Amazing quality and fast shipping. Will definitely buy again!",
    },
    {
      id: 5,
      name: "Robert Thompson",
      picture:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
      rating: 2,
      comment:
        "Disappointed with the customer service. They didn't respond to my queries.",
    },
  ];

  return (
    <>
      <div className="text-center font-bold mt-12 mb-8 text-3xl lg:text-5xl text-amber-600">
        Customer Reviews
      </div>
      <div className="bg-gray-100 py-10">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Slide bottom key={review.id}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Rating
                      emptySymbol={<FaStar className="text-gray-300" />}
                      fullSymbol={<FaStar className="text-yellow-500" />}
                      initialRating={review.rating}
                      readonly
                    />
                  </div>
                  <p className="text-lg text-gray-700 mb-4">{review.comment}</p>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-3"
                      src={review.picture}
                      alt={review.name}
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{review.name}</h3>
                      <p className="text-gray-600">Toy Car Enthusiast</p>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
