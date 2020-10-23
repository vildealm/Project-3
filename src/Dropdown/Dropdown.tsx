import React from 'react';
import './Dropdown.css';

export function Dropdown(props: any) {


    /*
      let options : any = props.options;
      let length : number = props.options.length;
      function getAveiro(){
          //contact backend to getAveiro
      }
      function getTrondheim(){
          //contact backend to getAveiro
      }
      function getWashington(){
          //contact backend to getAveiro
      }*/

    return (
        <div>
            <div className="dropdown-age">
                <button className="dropbtn">Age ▼</button>
                <div className="dropdownContent">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                </div>
            </div>
            <div className="dropdown-location">
                <button className="dropbtn">Location ▼</button>
                <div className="dropdownContent">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                </div>
            </div>
            <div className="dropdown-sorting">
                <button className="dropbtn">Sort by ▼</button>
                <div className="dropdownContent">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                </div>
            </div>
        </div> 
    );
}
/*
 <div className="dropdown1">
                <FormControl className="formcontroll-container" style={{ margin: '0px 7px' }}>
                    <InputLabel classes={{ root: classes.inputLabelRoot }}>Age</InputLabel>
                    <Select
                        className={classes.underline}
                        id="select-age"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}> Younger than 10 </MenuItem>
                        <MenuItem value={20}>10-20</MenuItem>
                        <MenuItem value={30}>20-50</MenuItem>
                        <MenuItem value={30}>50-70</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="formcontroll-container" style={{ margin: '0px 7px' }}>
                    <InputLabel classes={{ root: classes.inputLabelRoot }}>Location</InputLabel>
                    <Select
                        className={classes.underline}
                        id="select-location"
                        placeholder="Location"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Trondheim</MenuItem>
                        <MenuItem value={20}>Paris</MenuItem>
                        <MenuItem value={30}>Juba</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="formcontroll-container" style={{ margin: '0px 7px ' }}>
                    <InputLabel classes={{ root: classes.inputLabelRoot }}>Sort by</InputLabel>
                    <Select
                        className={classes.underline}
                        id="select-sort-after"
                        label="Sort After"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Alphabetically</MenuItem>
                        <MenuItem value={20}>Newest Member</MenuItem>
                        <MenuItem value={30}>Oldest Member</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

            <div className="dropdown1">
            <FormControl className="formcontroll-container">
                <InputLabel classes={{ root: classes.inputLabelRoot }}>Location</InputLabel>
                <Select
                    className={classes.underline}
                    id="select-location"
                    placeholder="Location"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Trondheim</MenuItem>
                    <MenuItem value={20}>Paris</MenuItem>
                    <MenuItem value={30}>Juba</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div className="dropdown1">
            <FormControl className="formcontroll-container">
                <InputLabel classes={{ root: classes.inputLabelRoot }}>Sort by</InputLabel>
                <Select
                    className={classes.underline}
                    id="select-sort-after"
                    label="Sort After"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Alphabetically</MenuItem>
                    <MenuItem value={20}>Newest Member</MenuItem>
                    <MenuItem value={30}>Oldest Member</MenuItem>
                </Select>
            </FormControl>
            </div> */
