import React from 'react';
import './PopUp.css';
export const PopUp = () => {
    return (
        <div>
            <form className="form-popup">
                <label>
                    Firstname:
                    <input type="text" name="fname" />
                </label>
                <label>
                    Lastname:
                    <input type="text" name="lname" />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" />
                </label>
                <label>
                    Bio:
                    <input type="text" name="bio" />
                </label>
                <button className="submit-form-btn"> Submit </button>
            </form>
        </div>
    )
}