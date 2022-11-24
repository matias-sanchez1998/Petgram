import React, { useState, useEffect } from "react";
import { Category } from "../Category/Category";
import { Item, UnorderedList as List } from "./styles";
function ListOfCategories() {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const response = await window.fetch(
        "https://petgram-server-edsf8xpy2.now.sh/categories"
      );
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed != newShowFixed && setShowFixed(!showFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  });

  function RenderList(fixed) {
    return (
      <List className={fixed ? "fixed" : ""}>
        {loading ? (
          <Item key="loading">
            <Category />
          </Item>
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
        )}
      </List>
    );
  }

  return (
    <>
      {RenderList()}
      {showFixed && RenderList(true)}
    </>
  );
}

export default ListOfCategories;
