import { Injectable } from '@angular/core';
import * as contentful from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private createClient = contentful.createClient
  ? contentful.createClient
  : (contentful as any).createClient;

private client = this.createClient({
  space: 'xx',
  accessToken: 'xx',
  environment: 'xx',
});
  constructor() { }

getPageBySlug = (slug: string,content_type='page') :Promise<contentful.Entry<any>[]>=>{

    return this.client.getEntries({
      include: 2,
      content_type,
      'fields.slug': slug,
    });
  }



getHeader = ():Promise<contentful.Entry<any>[]> =>
    this.client.getEntries({
      include: 2,
      content_type: 'header',
    });

getFooter = () =>
    this.client.getEntries({
      include: 2,
      content_type: 'footer',
    });

transformContentfulData = (pageData: any) => {
    if(!pageData.items[0]){
      return [{
        name: 'pageNotFound'
      }];
    }
    const components = pageData.items[0]?.fields?.sections || [pageData.items[0]];

    return components.map((section: any) => {
      const componentData: any = {};
      Object.keys(section.fields).forEach((fieldName: any) => {
        // Format image url
        if (section.fields[fieldName]?.sys?.type === 'Asset') {
          componentData[fieldName] = section.fields[fieldName].fields.file.url;
          // Format nested component data
        } else if (section.fields[fieldName]?.sys?.type === 'Entry') {
          componentData[fieldName] = section.fields[fieldName]?.fields;
          // Format an array of nested component data
        } else if (section.fields[fieldName].constructor === Array) {
          componentData[fieldName] = section.fields[fieldName].map(
            (nestedComponent: any) => nestedComponent.fields
          );
        } else {
          componentData[fieldName] = section.fields[fieldName];
        }
      });

      return {
        name: section.sys.contentType.sys.id,
        componentData,
      };
    });
  };

  getCompleteTransformedPageContent=async(slug: string,content_type='page')=>{
    const headerData= await this.getHeader();
    const footerData= await this.getFooter();
    const pageData= await this.getPageBySlug(slug);
    const data=this.transformContentfulData(headerData).concat(
      this.transformContentfulData(pageData),
      this.transformContentfulData(footerData));
    return data;
  }

}
