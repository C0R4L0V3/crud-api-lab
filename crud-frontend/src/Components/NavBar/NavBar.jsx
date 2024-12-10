const NavBar = ({ handleNav}) => {

    return (
        <nav>
            <button onClick={handleNav} value={'Home'}>Home</button>
            <button onClick={handleNav} value={'AddPart'}>Add A Part</button>
            <button onClick={handleNav} value={'PartList'}>Part List</button>
        </nav>
    )

}

export default NavBar