import {useRef, useState} from "react";
import uploadFile from "@/logic/ciient/upload";

const MainFooter = () => {
    const [image, setImage] = useState<any>(null);
    const [showPopup, setShowPopup] = useState(false); // popup
    
    const [WriterName, setWriterName] = useState('');
    const [Content, setContent] = useState('');
    const [SourceLink, setSourceLink] = useState('');

    const uploadBtn = useRef<HTMLInputElement | null>(null);
    
    const handleClick = () => {
        //@ts-ignore TODO: This is a hackaton feature. (DEMO)
        uploadBtn.current.click();
    }

    const onChangeFile = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];
        setImage(file)
    }

    const handleUpload = async () => {
        await uploadFile(image, "test", "test").then(() => {window.location.reload()});
    }

    const handleButtonClick = () => { // Choose File 클릭
        setShowPopup(true);
    };

    const handleClosePopup = () => { // 팝업 닫기
        setShowPopup(false);
        console.log(WriterName);
        console.log(Content);
        console.log(SourceLink);

        setWriterName(''); // 데이터 초기화
        setContent('');
        setSourceLink('');
    };

    const handleName = (event : any) => {
        setWriterName(event.target.value);
    }

    const handleContent = (event : any) => {
        setContent(event.target.value);
    }

    const handleSourceLink = (event : any) => {
        setSourceLink(event.target.value);
    }

    return (
        <div className={"fixed flex bottom-0 w-full items-center h-16 px-5"}>
            <div className={"flex flex-row w-full gap-5"}>
                <div>

                    <p 
                        className="text-2xl text-center font-bold text-gray-600"
                        style={{
                            position: "fixed",
                            bottom: 550,
                            marginLeft: 550,
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "300px",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            whiteSpace: "pre-wrap",
                        }}
                        >sample</p>

                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                        onClick={handleButtonClick} // handleClick -> handleButtonClick
                    >
                        Choose File
                    </button>
                    {
                        showPopup && (
                            <div style={{
                                position: "absolute",
                                bottom: 70,
                                marginTop: "20px",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(249, 249, 249, 0.7)",
                                width: "400px",
                                height: "500px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                zIndex: 20,
                                }}>

                                <p className="mt-5 text-2xl font-extrabold text-gray-500">Post your memories</p>

                                    <textarea
                                        className="text-lg content-center placeholder-gray-600 rounded-lg"
                                        placeholder="Name"
                                        value={WriterName}
                                        onChange={handleName}
                                        style={{
                                            marginTop: "10px",
                                            width: "350px",
                                            height: "50px",
                                            padding: "10px",
                                            borderRadius: "20px",
                                            border: "1px solid #ddd",
                                            fontSize: "14px",
                                            resize: "none",
                                        }}>
                                    </textarea>

                                    <textarea
                                        className="text-lg placeholder-gray-600 rounded-lg"
                                        placeholder="Put your great memories!"
                                        value={Content}
                                        onChange={handleContent}
                                        style={{
                                            marginTop: "10px",
                                            width: "350px",
                                            height: "200px",
                                            padding: "10px",
                                            borderRadius: "20px",
                                            border: "1px solid #ddd",
                                            fontSize: "14px",
                                            resize: "none",
                                        }}>
                                    </textarea>

                                    <textarea
                                        className="text-lg content-center placeholder-gray-600 rounded-lg"
                                        placeholder="Source"
                                        value={SourceLink}
                                        onChange={handleSourceLink}
                                        style={{
                                            marginTop: "10px",
                                            width: "350px",
                                            height: "50px",
                                            padding: "10px",
                                            borderRadius: "20px",
                                            border: "1px solid #ddd",
                                            fontSize: "14px",
                                            resize: "none",
                                        }}>
                                    </textarea>

                                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px'}}>
                                        <button
                                            onClick={handleClick}
                                            style={{
                                                padding: "10px 20px",
                                                borderRadius: "20px",
                                                backgroundColor: "#ADD8E6",
                                                color: "white",
                                                border: "none",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                                marginRight: "10px",
                                            }}
                                        >
                                            File
                                        </button>

                                        <button 
                                            className="mr-3 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                                            onClick={handleUpload}>
                                            Upload
                                        </button>

                                        <button
                                            onClick={handleClosePopup}
                                            style={{
                                                padding: "10px 20px",
                                                borderRadius: "20px",
                                                backgroundColor: "#FF6F61",
                                                color: "white",
                                                border: "none",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                            }}
                                        >
                                            Back
                                        </button>
                                    </div>
                            </div>
                        )
                    }
                </div>
                <input type="file" id="file" accept={".png"} ref={uploadBtn} style={{display: "none"}} onChange={onChangeFile}/>
                {/* <div>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                        onClick={() => {handleUpload()}}
                    >
                        Upload
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default MainFooter;