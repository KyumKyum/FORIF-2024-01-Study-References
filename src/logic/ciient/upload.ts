import axios from "axios";

const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

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