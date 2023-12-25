import { reviews } from "../constants";
import { ReviewCard } from "../components";

const CustomersReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-wlg text-center">
        Here genuine stories from our satisfied customers
      </p>
      <div className="mt-14 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomersReviews;
