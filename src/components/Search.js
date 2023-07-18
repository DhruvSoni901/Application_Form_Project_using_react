import { FormControl, InputGroup, DropdownButton, Dropdown  } from "react-bootstrap";   
import { BsCheck2 } from "react-icons/bs";

const DropDown = ({orderBy,Sortby,onSortByChange,onOrderByChange})=>{
    return(
        <>
            <DropdownButton
                id="input-group-dropdown-2"
                variant="info"
                title="Sort"
                align="end"
            >
            <Dropdown.Item href="#/action-1" onClick={() => onSortByChange('firstName')}>First Name {(Sortby == 'firstName') && <BsCheck2 className="float-end"/>}</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => onSortByChange('lastName')}>Last Name {(Sortby == 'lastName') && <BsCheck2 className="float-end"/>}</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => onSortByChange('aptDate')}>Date {(Sortby == 'aptDate') && <BsCheck2 className="float-end"/>}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4" onClick={() => onOrderByChange('asc')}>Ascending {(orderBy == 'asc') && <BsCheck2 className="float-end"/>}</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => onOrderByChange('desc')}>Descending {(orderBy == 'desc') && <BsCheck2 className="float-end"/>}</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

const Search = ({query,onQueryChange,orderBy,Sortby,onSortByChange,onOrderByChange}) =>{
    return(
        <InputGroup className="mb-3">
            <FormControl placeholder="Search" onChange={(event) => {onQueryChange(event.target.value)
            }} value={query}/>
            <DropDown
                Sortby={Sortby}
                onSortByChange = {mySort => onSortByChange(mySort)}
                orderBy = {orderBy}
                onOrderByChange = {mySort => onOrderByChange(mySort)}/>
        </InputGroup>
    )
}

export default Search;