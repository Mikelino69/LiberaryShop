// import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
 //but for now -> is not good
import "../styles/productsshop.css";
import ProductShop from "./ProductShop";
import ReactPaginate from "react-paginate";
import {Store, StoreProvider} from "../Store";



const ProductsShop = () => {
  //for filter category and all products
 const {state, dispatch} = useContext(Store)
  const [data, setData] = useState(state.products);

  //for category
  const [category, setCategory] = useState([]);

  // //for paginate
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 3;

  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = data
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((item) => <ProductShop item={item} key={item._id} />);

  const pageCount = Math.ceil(data.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected); //if i click page number 2 than selected is number 2
  };

  //filter and all products
  const filterResult = (catItem) => {
    const result = state.products.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  //for show all category
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/category");
      setCategory(result.data);
    };
    fetchData();
  
  }, []);

 

  return (
    <div className="shop-container">
       
      <StoreProvider /> 
      <div className="shop-row">
        <div className="shop-col">
          <h2>Catgeory</h2>
          <button className="shop-btn" onClick={() => setData(state.products)}>
            All <FontAwesomeIcon icon={faChevronRight} />
          </button>
          {/* show all category if exists */}
          {category.map((item) => (
            <button
              className="shop-btn"
              onClick={() => filterResult(item.title)}
            >
              {item.title} <FontAwesomeIcon icon={faChevronRight} />
            </button>
          ))}
        </div>
        <div className="shop-col">
          <div className="shop-products">
            {/* show product card */}
            {/* {data.map((item) => (
              <ProductShop item={item} key={item._id} />
            ))} */}
            {displayProducts}
          </div>
          <div className="shop-pagination">
            <ReactPaginate
              previousLabel={"<<"} //for previous
              nextLabel={">>"} //for next
              pageCount={pageCount} //for page number
              onPageChange={changePage} //for selected page, current page
              containerClassName={"paginationBttns"} //class for style
              previousLinkClassName={"previousBttn"} //class for style
              nextLinkClassName={"nextBttn"} //class for style
              disabledClassName={"paginationDisabled"} //class for style
              activeClassName={"paginationActive"} //class for style
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShop;
