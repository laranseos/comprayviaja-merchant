import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconTick from "../../components/icons/IconTick";
import IconCross1 from "../../components/icons/IconCross1";
import IconMoreHorizontal from "../../components/icons/IconMoreHorizontal";
import IconDownOpen from "../../components/icons/IconDownOpen";
import Authentic1 from "../../assets/samples/authentic1.jpg"
import Authentic2 from "../../assets/samples/authentic2.jpg"
import Authentic3 from "../../assets/samples/authentic3.jpg"
import Authentic4 from "../../assets/samples/authentic4.jpg"
import PosedAuthentic1 from "../../assets/samples/posed-authentic1.jpg"
import PosedAuthentic2 from "../../assets/samples/posed-authentic2.jpg"
import PosedAuthentic3 from "../../assets/samples/posed-authentic3.jpg"
import PosedAuthentic4 from "../../assets/samples/posed-authentic4.jpg"

import Dynamic1 from "../../assets/samples/dynamic1.jpg"
import Dynamic2 from "../../assets/samples/dynamic2.jpg"
import Dynamic3 from "../../assets/samples/dynamic3.jpg"
import Dynamic4 from "../../assets/samples/dynamic4.jpg"
import Static1 from "../../assets/samples/static1.jpg"
import Static2 from "../../assets/samples/static2.jpg"
import Static3 from "../../assets/samples/static3.jpg"
import Static4 from "../../assets/samples/static4.jpg"

import Contextual1 from "../../assets/samples/contextual1.jpg"
import Contextual2 from "../../assets/samples/contextual2.jpg"
import Contextual3 from "../../assets/samples/contextual3.jpg"
import Contextual4 from "../../assets/samples/contextual4.jpg"
import Contextless1 from "../../assets/samples/contextless1.jpg"
import Contextless2 from "../../assets/samples/contextless2.jpg"
import Contextless3 from "../../assets/samples/contextless3.jpg"
import Contextless4 from "../../assets/samples/contextless4.jpg"

const Photos = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [isWidthAvailable, setWidthAvailable] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/product-create/options');
  };


  const [shortCharacters, setShortCharacters] = useState(60);
  const handleShortChange = (event) => {
    const length = event.target.value.length;
    setShortCharacters(60 - length);
  }

  //Image Upload

  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageClick = (index) => {
    // Create a copy of the selectedImages array
    const updatedImages = [...selectedImages];
    // Remove the clicked image from the array
    updatedImages.splice(index, 1);
    // Update the selectedImages state with the updated array
    setSelectedImages(updatedImages);
  };

  const checkImageWidth = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const width = img.width;
          if (width >= 800) {
            setWidthAvailable(true);
            resolve();
          } else {
            setWidthAvailable(false);
            reject();
          }
        };
        img.onerror = () => {
          reject();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };
  
  const filterImagesByWidth = async (files) => {
    const filteredFiles = [];
    for (const file of files) {
      try {
        await checkImageWidth(file);
        filteredFiles.push(file);
      } catch (error) {
        continue;
      }
    }
    return filteredFiles;
  };
  
  const handleImageUpload = (event) => {
    
    const files = Array.from(event.target.files);
    const allowedExtensions = ["svg", "png", "jpg", "jpeg", "gif"];
    const filteredFiles = files.filter((file) => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const isAllowedExtension = allowedExtensions.includes(fileExtension);
      return isAllowedExtension;
    });
  
    filterImagesByWidth(filteredFiles).then((filteredImages) => {
      setSelectedImages((prevImages) => {
        const uniqueImages = filteredImages.filter((file) => {
          return !prevImages.some((image) => image.name === file.name);
        });
        return [...prevImages, ...uniqueImages];
      });
    });
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const allowedExtensions = ["svg", "png", "jpg", "jpeg", "gif"];
    const filteredFiles = files.filter((file) => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const isAllowedExtension = allowedExtensions.includes(fileExtension);
      return isAllowedExtension;
    });
  
    filterImagesByWidth(filteredFiles).then((filteredImages) => {
      setSelectedImages((prevImages) => {
        const uniqueImages = filteredImages.filter((file) => {
          return !prevImages.some((image) => image.name === file.name);
        });
        return [...prevImages, ...uniqueImages];
      });
    });
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };


  return (
    <div className=" w-full p-4 sm:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Photos</h1>
        <h2 className="mt-8 font-semibold mb-2">Upload relevant, engaging photos to potentially increase your conversion rate by an average of 2.7% — in other words, to increase your bookings and earnings.</h2>

        <div className="bg-zinc-200 rounded-md p-4 font-medium">
          <div className="font-bold cursor-pointer" onClick={()=>setShowMore(!showMore)}>Photo guidelines<span className="float-right font-bold text-2xl">{showMore?<IconDownOpen/>:<IconMoreHorizontal/>}</span></div>
          {
            showMore &&
            <div>
              <div>
                <div className="pt-8 pb-4 font-bold">Authentic</div>
                <p>Feature genuine interactions, true-to-life colors and textures, and actual moments from the activity itself. Posed photos and unrealistic edits set the wrong expectations for customers.</p>
                <div className="grid grid-cols-2 gap-x-1">
                  <div className="grid sm:grid-cols-2">
                    <img src={Authentic1} className="h-full w-full" alt="a1" />
                    <img src={Authentic2} className="h-full w-full" alt="a2" />
                    <img src={Authentic3} className="h-full w-full" alt="a3" />
                    <img src={Authentic4} className="h-full w-full" alt="a4" />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <img src={PosedAuthentic1} className="h-full w-full" alt="p1" />
                    <img src={PosedAuthentic2} className="h-full w-full" alt="p2" />
                    <img src={PosedAuthentic3} className="h-full" alt="p3" />
                    <img src={PosedAuthentic4} className="h-full w-full" alt="p4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-2 text-center">
                  <div>Authentic, natural images</div>
                  <div>Posed, unnatural images</div>
                </div>
              </div>              
              <div>
                <div className="pt-8 pb-4 font-bold">Dynamic</div>
                <p>Use images that are filled with action, emotions, and moments of discovery. These kinds of engaging images create a sense of curiosity about the experience you're offering.</p>
                <div className="grid grid-cols-2 gap-x-1">
                  <div className="grid sm:grid-cols-2">
                    <img src={Dynamic1} className="h-full w-full" alt="a1" />
                    <img src={Dynamic2} className="h-full w-full" alt="a2" />
                    <img src={Dynamic3} className="h-full w-full" alt="a3" />
                    <img src={Dynamic4} className="h-full w-full" alt="a4" />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <img src={Static1} className="h-full w-full" alt="p1" />
                    <img src={Static2} className="h-full w-full" alt="p2" />
                    <img src={Static3} className="h-full w-full" alt="p3" />
                    <img src={Static4} className="h-full w-full" alt="p4" />
                  </div>
                </div>
             
                <div className="grid grid-cols-2 gap-x-2 text-center">
                  <div>Active, engaging images</div>
                  <div>Static, unengaging images</div>
                </div>
              </div>
              <div>
                <div className="pt-8 pb-4 font-bold">Contextual</div>
                <p>Avoid unnecessary and indistinguishable close-ups of items. Instead, pick images that really showcase activity location and experience.</p>
                <div className="grid grid-cols-2 gap-x-1">
                  <div className="grid sm:grid-cols-2">
                    <img src={Contextual1} className="h-full w-full" alt="a1" />
                    <img src={Contextual2} className="h-full w-full" alt="a2" />
                    <img src={Contextual3} className="h-full w-full" alt="a3" />
                    <img src={Contextual4} className="h-full w-full" alt="a4" />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <img src={Contextless1} className="h-full w-full" alt="p1" />
                    <img src={Contextless2} className="h-full w-full" alt="p2" />
                    <img src={Contextless3} className="h-full w-full" alt="p3" />
                    <img src={Contextless4} className="h-full w-full" alt="p4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-2 text-center">
                  <div>Atmospheric, contextual images</div>
                  <div>Contextless images</div>
                </div>
              </div>
              <div className="bg-slate-300  text-sm font-semibold space-y-2 mt-2 p-4">
                <div>Examples</div>
                <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Photos should be centered, bright, and tell an exciting story about your activity</div>
                <div className="flex"><IconTick className="text-green-700 my-auto mr-2"/>Use photos in landscape or horizontal format (at least 1280px wide)</div>
                <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Do not use black and white photos or photos in portrait or vertical format</div>
                <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Do not include recognizable faces without model release forms</div>
                <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Do not use photos with other logos, photographer watermarks or readable licence plates</div>
                <div className="flex"><IconCross1 className="text-red-700 my-auto mr-2"/>Do not use screenshots or photos of printed maps</div>
              </div>

            </div>
          }
        
        </div>
        <div className="p-4 font-medium">
          <input type="checkbox" id="checkbox" className="cursor-pointer" onChange={handleCheckboxChange}/> <label htmlFor="checkbox" className="cursor-pointer">I own the copyright for these pictures. I understand I’m liable for any copyright infringement.</label>
        </div>
        { isChecked &&
        <div className="p-4">
          <div className="flex items-center justify-center w-full" onDrop={handleDrop} onDragOver={handleDragOver}>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center h-64 justify-center w-full border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-200"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MIN. 800px width)</p>
                {!isWidthAvailable && <p className="text-sm font-semibold text-red-600">Your photos should be at least 800px wide</p>}
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                multiple
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 ">
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Image ${index + 1}`}
                className="max-w-full h-full hover:bg-red-600 hover:opacity-60 cursor-pointer"
                onClick={() => handleImageClick(index)}
                title="Remove"
              />
            ))}
          </div>
        </div>
        }

        <div className="flex justify-end">
          <button  className="outline-button my-8 mr-4" onClick={()=>navigate('/product-manage')}>Save & Exit</button> 
          {(selectedImages.length>0 && isChecked)?<button type="submit" className="default-button bg-blue-600 my-8">Continue</button>:
          <button type="submit" className="default-button bg-gray-600 hover:bg-gray-600 my-8" disabled>Continue</button>}
        </div>
      </form>
    </div>
  );
};

export default Photos;
