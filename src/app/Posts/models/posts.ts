import { getLocaleDateFormat } from '@angular/common';

class UserPost {

    postId: number;
    createdDate: Date;
    title: string;
    content: string;
    userId: string;
    headerImage: string;
    lastUpdated: Date;
}

export { UserPost }