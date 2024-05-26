import React from "react";

const ReviewDetails = ({
  params,
}: {
  params: {
    listId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Review {params.reviewId} for product {params.listId}
    </div>
  );
};

export default ReviewDetails;
