type Comment = {
 userId: string;
 comment: string;
 timestamp: string;
};

type File = {
 fileId: string;
 uploadedBy: string;
 uploadDate: string;
 description: string;
};

export type Task = {
 id: string;
 title: string;
 description: string;
 assignedTo: string;
 startDate: string;
 endDate: string;
 status: string;
 comments: Comment[];
 files: File[];
};
