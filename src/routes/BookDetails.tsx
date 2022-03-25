<<<<<<< Updated upstream
import React from 'react'

const BookDetails = () => {
  return (
    <div>BookDetails</div>
  )
}
=======
import React from "react";
import PageLayout from "../components/Layout/PageLayout";

const BookDetails = () => {
  return (
    <PageLayout>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-Inter font-bold text-white">
          Book's Details
        </h1>
        
      </div>
    </PageLayout>
  );
};
>>>>>>> Stashed changes

export default BookDetails;
