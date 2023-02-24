import { UploadFile } from "@pankod/refine-antd";

interface IUploadResponse {
    url: string;
}
interface EventArgs<T = IUploadResponse> {
    file: UploadFile<T>;
    fileList: Array<UploadFile<T>>;
}

export const normalizeFile = (event: EventArgs) => {
    const uploadedFile = event[0]; // BUG: Fix upload file type?? Is this needed?
    if(uploadedFile !== undefined){
        const { uid, name, url, type, size, response, percent, status } = uploadedFile;
    
        return {
            uid,
            name,
            url: url || response?.url,
            type,
            size,
            percent,
            status,
        };
    } else {
        return {}
    }
};