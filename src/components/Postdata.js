import React,{useEffect,useState, Fragment} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchData } from '../../src/actions/post';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteRow} from '../../src/actions/post';
import ReactPaginate from "react-paginate";
import '../App.css';
 
const PER_PAGE = 10

const Postdata = ({fetchData,deleteRow,post:{posts,loading}}) => {

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchData();
    },[fetchData]);
    if(loading){
        return <h2>Loading..</h2>
    }

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }

      const offset = currentPage * PER_PAGE;

      const currentPageData = posts.slice(offset, offset + PER_PAGE)

      const pageCount = Math.ceil(posts.length / PER_PAGE);

    return (
        <Fragment>
               <table className="table">
      <thead>
        <tr>
        <th>albumId</th>
          <th>Id</th>
          <th>title</th>
          <th>url</th>
          <th>thumbnailUrl</th>  
        </tr>
      </thead>
      <tbody>
          { (currentPageData.length > 0) ? currentPageData.map((post,id)=>{
              return(
                  <tr key={post.id}>
                      <td>{post.albumId}</td>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.url}</td>
                      <td>{post.thumbnailUrl}</td>
                      <td>
                <button className='btn btn-danger' onClick={()=>deleteRow(post.id)}>Delete</button>
            </td>
                  </tr>
              )
          }):<tr><td colSpan="5">Loading ... </td></tr>}
      </tbody>
    </table> 
    <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
  </Fragment>
        
        
    )
}

Postdata.propTypes = {
    fetchData:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    deleteRow:PropTypes.func.isRequired
};

const mapStateToProps= state =>({
    post:state.post
});

export default connect(mapStateToProps,{fetchData,deleteRow}) (Postdata);