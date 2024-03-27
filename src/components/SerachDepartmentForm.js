import { useState } from "react";

const SearchDepartmentForm = ({departments, postSearch}) => {

    const [departmentId, setDepartmentId] = useState(null);

    const departmentOptions = departments.map((department, index) => {
        return <option key={index} value={department.departmentId}>{department.displayName}</option>
    })


    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Submit Works");
        const selectedDepartment = departments.find((department) => department.departmentId === departmentId);
        // console.log(selectedDepartment.displayName);
        postSearch(selectedDepartment.displayName);
        // navigation
    }
    
    return ( 
        <>
            <h2>Searching..</h2>
            <form onSubmit={handleSearch}>
                <h3>Search Art Collection by Departments</h3>

                <select
                    defaultValue="select-department"
                    onChange={(event) => setDepartmentId(parseInt(event.target.value))}>
                    <option disabled value="select-department"> Select a Department </option>
                    {departmentOptions}
                </select>
                
                <input type="submit"/>
            </form>
        </>
    );
}
 
export default SearchDepartmentForm;