import { useState } from "react";

const SearchDepartmentForm = ({departments}) => {

    const [departmentId, setDepartmentId] = useState(null);

    const departmentOptions = departments.map((department, index) => {
        return <option key={index} value={department.id}>{department.displayName}</option>
    })
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Submit Works");
        //postSearch(departmentId)
        //navigation
    }
    
    return ( 
        <>
            <h2>Searching..</h2>
            <form onSubmit={handleSearch}>
                <h3>Search Art Collection by Departments</h3>

                <select
                    defaultValue="select-department"
                    onChange={(event) => setDepartmentId(event.target.value)}>
                    <option disabled value="select-department"> Select a Department </option>
                    {departmentOptions}
                </select>
                
                <input type="submit"/>
            </form>
        </>
    );
}
 
export default SearchDepartmentForm;