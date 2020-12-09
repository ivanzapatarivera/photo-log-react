import { render } from '@testing-library/react';
import '../../style.css';

function LogNewPhoto() {
    render(
        <div>
            <div className="card-body logNewPhotoFormDiv">
            <h5 className="text-center">Log your Photo!</h5>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <label className="btn btn-primary">
                <i className="fa fa-image"></i> Photo <input type="file" name="upload" id="upload" style={{display: "none"}} />
                </label>
                <div id="previewFileName"></div>
                <button className="button btn" type="submit" id="newImageSubmit"><i className="fas fa-check"></i></button>
                <span className="button buttonCancel btn ml-1" id="logNewPhotoFormCancelBtn"><i className="fas fa-times"></i></span>
            </form>     
            </div>
        </div>
    )
}

export default LogNewPhoto;