import React from 'react';

export const Searchbar = () => {
    return <div>
    <section class="search-sec">
        <div class="container">
            <form action="#" method="post" novalidate="novalidate">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">                            
                            <div  class="col-lg-3 col-md-3 col-sm-12 p-0">
                                <input style={{ fontSize: "15px" }} type="text" class="form-control search-slt" placeholder="Enter Price Range" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                <select style={{ fontSize: "17px" }}    class="form-control search-slt" id="exampleFormControlSelect1">
                                    <option>Germany</option>
                                    <option>Poland</option>
                                    <option>Cananda</option>
                                    <option>France</option>
                                    <option>Mexico</option>                  
                                </select>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                <button  style={{ fontSize: "14px" }}  type="button" class="btn btn-danger wrn-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    </div>;
};
