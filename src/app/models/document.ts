import * as _ from 'lodash';

export class Document {
  _id: string;
  _addedBy: string;
  _application: string; // objectid -> Application
  _decision: string; // objectid -> Decision
  _comment: string; // objectid -> Comment
  documentFileName: string;
  internalOriginalName: string;
  displayName: string;
  documentType: string;
  datePosted: string;
  dateUploaded: string;
  dateReceived: string;
  documentFileSize: string;
  internalURL: string;
  isDeleted: boolean;
  internalMime: string;
  tags: Array<string>;
  checkbox: boolean;
  project: string;
  upfile: File;
  type: string;
  documentAuthor: string;
  milestone: string;
  description: string;
  isPublished = false; // depends on tags; see below

  constructor(obj?: any) {
    this._id              = obj && obj._id              || null;
    this.project              = obj && obj.project              || null;
    this._addedBy         = obj && obj._addedBy         || null;
    this._comment         = obj && obj._comment         || null;
    this.checkbox         = obj && obj.checkbox         || null;
    this.documentFileName = obj && obj.documentFileName || null;
    this.displayName      = obj && obj.displayName      || null;
    this.documentType      = obj && obj.documentType      || null;
    this.datePosted      = obj && obj.datePosted      || null;
    this.dateUploaded      = obj && obj.dateUploaded      || null;
    this.dateReceived      = obj && obj.dateReceived      || null;
    this.documentFileSize      = obj && obj.documentFileSize      || null;
    this.internalURL      = obj && obj.internalURL      || null;
    this.isDeleted        = obj && obj.isDeleted        || null;
    this.internalMime     = obj && obj.internalMime     || null;
    this.internalOriginalName     = obj && obj.internalOriginalName     || null;

    this.upfile     = obj && obj.upfile     || null;

    this.type      = obj && obj.type      || null;
    this.documentAuthor      = obj && obj.documentAuthor      || null;
    this.milestone      = obj && obj.milestone      || null;
    this.description      = obj && obj.description      || null;


    // wrap isPublished around the tags we receive for this object
    if (obj && obj.tags) {
      for (const tag of obj.tags) {
        if (_.includes(tag, 'public')) {
          this.isPublished = true;
          break;
        }
      }
    }
  }
}
