import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import data from "../data/category_data";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchData } from "../Slices/SearchSlice";
import { add, remove } from "../Slices/SearchSlice";

const Categories = (props) => {
  const [checkboxSearch, setcheckboxSearch] = useState([]);

  const dispatch = useDispatch();
  const searchItems1 = useSelector(selectSearchData);

  const updateCheckboxSearch = (value, checked) => {
    const updatedSearch = checked
      ? dispatch(add([...searchItems1, value]))
      : dispatch(remove(searchItems1.filter((val) => val !== value)));
    setcheckboxSearch(updatedSearch);

    props.oncheckboxchange(checkboxSearch);
  };

  const handleCheck = (e) => {
    updateCheckboxSearch(e.target.value, e.target.checked);
  };

  useEffect(() => {}, [checkboxSearch]);

  return (
    <>
      <h4>Categories</h4>
      {data.map((category) => {
        return (
          <div key={category.id}>
            <div className="categories">
              <div className="categories-align">
                <Form>
                  <div className="mb-2">
                    <Form.Check
                      type="checkbox"
                      inline
                      name={category.name}
                      label={category.category}
                      id={`inline-checkbox-${category.category}`}
                      onChange={(e) => handleCheck(e)}
                      value={category.category}
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
