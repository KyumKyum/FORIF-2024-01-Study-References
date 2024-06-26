import axios from "axios";



const uploadFile = async (file: File, name: string, content: string, youtubeUrl: string) => {
    const url = "http://localhost:3000/api/image"
    const form = new FormData();

    // FormData에 필드 추가
    form.append('name', name);
    form.append('file', file);
    form.append('content', content);
    form.append('youtube', youtubeUrl)

    await axios.post(url, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export default uploadFile;