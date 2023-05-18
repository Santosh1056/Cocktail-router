import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, cocktails } = useGlobalContext();

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktail matched to your search citeria
      </h2>
    );
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
