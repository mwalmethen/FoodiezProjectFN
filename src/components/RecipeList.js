import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import recipes from "../DummyData";
import RecipeDetail from "./RecipeDetail";
import RecipeItem from "./RecipeItem";
import { Field, Form, Formik } from "formik";
import { Navigate } from "react-router";
// import { checkToken } from '../API/storage'
import { getAllRecipes } from "../api/recipe";
import "../css/recipe.css";

const RecipeList = () => {
  // const [search, setSearch] = useState("")
  // const [type, setType] = useState("")
  // const [fromDate, setFrom] = useState("")
  // const [toDate, setTo] = useState("")

  // const handleSearch = (event) =>setSearch(event.target.value)
  // const handleType = (event) => setType(event.target.value)
  // const handleFromDate = (event) => setFrom(event.target.value)
  // const handleToDate = (event) => setTo(event.target.value)

  const { data, isFetching, isSuccess, refetch, isFetched } = useQuery({
    queryKey: ["RecipesList"],
    queryFn: getAllRecipes,
    enabled: true,
  });

  // >> Array of Transactions Objects
  const recipes = isSuccess
    ? data?.map((recipe) => <RecipeItem recipe={recipe} />)
    : null;

  // data._id, data.type, data.amount, data.from, data.to, data.createdAt, data.updatedAt, data.__v >> Object keys

  // if (isFetching) {
  //   return <LoadingMobile name={"Transactions"}/>
  // }

  // if (isFetched) {
  //   return <div>Success...</div>;
  // }

  // const transactionsType = data?.filter((transaction) =>
  //   transaction.type.includes(type)
  // );
  // const transactionsSearch = search
  //   ? transactionsType.filter((transaction) => search == transaction.amount)
  //   : transactionsType;
  // const transactionsFrom = fromDate
  //   ? transactionsSearch.filter(
  //       (transaction) =>
  //         transaction.createdAt.substring(
  //           transaction.createdAt,
  //           transaction.createdAt.indexOf("T")
  //         ) >= fromDate
  //     )
  //   : transactionsSearch;
  // const transactionsTo = toDate
  //   ? transactionsFrom.filter(
  //       (transaction) =>
  //         transaction.createdAt.substring(
  //           transaction.createdAt,
  //           transaction.createdAt.indexOf("T")
  //         ) <= toDate
  //     )
  //   : transactionsFrom;

  // const transactions = transactionsTo.map((transaction) => (
  //   <div className="transaction-item">
  //     <div className="amount">{transaction.amount}</div>
  //     <div className="type">{transaction.type}</div>
  //     <div className="created">
  //       {transaction.createdAt.substring(
  //         transaction.createdAt,
  //         transaction.createdAt.indexOf("T")
  //       )}
  //     </div>
  //   </div>
  // ));

  return (
    <div>
      <div className="recipe-list">
        {recipes}
        {/* {recipes.map((recipe) => (<RecipeItem key={recipe.id} recipe={recipe} />))} */}
      </div>
    </div>
  );
};

export default RecipeList;
