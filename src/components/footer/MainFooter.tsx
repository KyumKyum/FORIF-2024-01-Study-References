import {useRef, useState} from "react";

const MainFooter = () => {
    const [image, setImage] = useState<any>(null);

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

    return (
        <div className={"fixed flex bottom-0 w-full items-center h-16 px-5"}>
            <div className={"flex flex-row w-full gap-5"}>
                <div>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                        onClick={handleClick}
                    >
                        Choose File
                    </button>
                </div>
                <input type="file" id="file" ref={uploadBtn} style={{display: "none"}} onChange={onChangeFile}/>
                <div>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainFooter;