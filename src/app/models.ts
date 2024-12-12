interface TribeProject {
  name: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  customer: string;
}

enum Role {
  FRONTEND,
  BACKEND,
  NAVIGATOR,
}

export interface TribeMemberMock {
  firstName: string;
  lastName: string;
  project?: TribeProject;
  roles: Array<Role>;
  hobbies: Array<string>;
  skills: Array<string>;
}
