import "../../style.css";

function PhotoLogs() {
  return (
    <div className="row picturesWall" id="picturesCollage">
            <div className="col-12">
              <h4 className="text-center pt-3" id="picturesCollageHeading">Recent PhotoLogs</h4>
              <div className="row p-3 mainCollageDIV" id="collageDivs">
                            {/* <!-- First DIV --> */}
                            <div className="col-3 px-0"><img src="../image/Kyoto (Koyasu Pagoda - Kiyomizu).jpg" id="5fce6905879a4c0015d5a2db" className="collageImageDIV firstDiv" /></div>
                            <div className="col-5">
                              <div className="row">
                                {/* <!-- Second DIV --> */}
                                <div className="col-12 px-0"><img src="../image/Maidono (Yasaka Jinja).jpg" id="5fce6aa7879a4c0015d5a2ea" className="collageImageDIV secondDiv" /></div>
                              </div>
                              <div className="row">
                                {/* <!-- Third DIV --> */}
                                <div className="col-6 px-0"><img src="../image/Old Kyoto (Gion).jpg" id="5fce6ae1879a4c0015d5a2f5" className="collageImageDIV thirdDiv" /></div>
                                {/* <!-- Fourth DIV --> */}
                                <div className="col-6 px-0"><img src="../image/20200304_222707.jpg" id="5fcf37ee9b56b600158d46f7" className="collageImageDIV fourthDiv" /></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="row">
                                {/* <!-- Fifth DIV --> */}
                                <div className="col-12 px-0"><img src="../image/20200303_134752.jpg" id="5fcf387a9b56b600158d470d" className="collageImageDIV fifthDiv" /></div>
                              </div>
                              <div className="row">
                                {/* <!-- Sixth DIV --> */}
                                <div className="col-12 px-0"><img src="../image/20180903_162515.jpg" id="5fcf39529b56b600158d471c" className="collageImageDIV sixthDiv" /></div>
                              </div>
                            </div>
                          </div>
            </div>
          </div>
  )
}

export default PhotoLogs;
