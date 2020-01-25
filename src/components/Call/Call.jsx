import React, { ReactDOM } from "react";
import { render } from "react-dom";
import "./Call.scss";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {Modal, Button} from 'react-bootstrap'
class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TranscriptModal:false
    };
  }

  MyVerticallyCenteredModal= ()=> {
    console.log("modal open")
    return (
      <Modal
      show={true}
        size="lg"
        onHide={this.openTranscriptModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.openTranscriptModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  openTranscriptModal = async ()=>{
    const {TranscriptModal} = this.state;
    await this.setState({TranscriptModal:TranscriptModal?false:true})
   
  }
  render() {
    const {TranscriptModal} = this.state;
    var products = [
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" },
      { Call_Sid: '-877807980hgfgfyttjjnjh6hyu7u9', From: 'two', To: 'three', Transcript:"sgf",Sentiment:"dgg" }
    ];
const columns = [{
  dataField: 'Call_Sid',
  text: 'Call Sid'
}, {
  dataField: 'From',
  text: 'From'
}, {
  dataField: 'To',
  text: 'To'
}, {
  dataField: 'Sentiment',
  text: 'Sentiment'
}, {
  dataField: 'Transcript',
  text: 'Transcript',
  events: {
    onClick: (e, column, columnIndex, row, rowIndex) => {this.openTranscriptModal() },
  }
}];
paginationFactory({
  page: 0, // Specify the current page. It's necessary when remote is enabled
  sizePerPage: 20, // Specify the size per page. It's necessary when remote is enabled
  totalSize: 500, // Total data size. It's necessary when remote is enabled
  pageStartIndex: 0, // first page will be 0, default is 1
  paginationSize: 3,  // the pagination bar size, default is 5
  showTotal: true, // display pagination information
  sizePerPageList: [ {
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: products.length
  } ], // A numeric array is also available: [5, 10]. the purpose of above example is custom the text
  withFirstAndLast: false, // hide the going to first and last page button
  alwaysShowAllBtns: true, // always show the next and previous page button
  firstPageText: 'First', // the text of first page button
  prePageText: 'Prev', // the text of previous page button
  nextPageText: 'Next', // the text of next page button
  lastPageText: 'Last', // the text of last page button
  nextPageTitle: 'Go to next', // the title of next page button
  prePageTitle: 'Go to previous', // the title of previous page button
  firstPageTitle: 'Go to first', // the title of first page button
  lastPageTitle: 'Go to last', // the title of last page button
  hideSizePerPage: true, // hide the size per page dropdown
  hidePageListOnlyOnePage: true, // hide pagination bar when only one page, default is false
  onPageChange: (page, sizePerPage) => {}, // callback function when page was changing
  onSizePerPageChange: (sizePerPage, page) => {}, // callback function when page size was changing
  paginationTotalRenderer: (from, to, size) => {}  // custom the pagination total
})
console.log(TranscriptModal);
    return (
      <div>
        {TranscriptModal && this.MyVerticallyCenteredModal()}
        <BootstrapTable keyField='id' data={ products } columns={ columns } pagination={ paginationFactory() } />
      </div>
    );
  }
}

export default Call;