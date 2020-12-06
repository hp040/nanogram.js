import { IThumbnail } from './common/thumbnail';
import { ICountry } from './common/country';
import { ICity } from './common/city';
export interface ILocationResponse {
    entry_data: {
        LocationsPage: ILocationContent[];
    };
}
export interface ILocationContent {
    graphql: {
        location: {
            id: string;
            name: string;
            has_public_page: boolean;
            lat: number;
            lng: number;
            slug: string;
            blurb: string;
            website: string;
            phone: string;
            primary_alias_on_fb: string;
            address_json: string;
            profile_pic_url: string;
            edge_location_to_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: ILocationMedia[];
            };
            edge_location_to_top_posts?: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: ILocationMedia[];
            };
            directory?: {
                country: ICountry;
                city: ICity;
            };
        };
    };
    logging_page_id?: string;
    photos_and_videos_header?: boolean;
    recent_pictures_and_videos_subheader?: boolean;
    top_images_and_videos_subheader?: boolean;
}
export interface ILocationMedia {
    node: {
        comments_disabled?: boolean;
        id: string;
        edge_media_to_caption: {
            edges: IMediaToCaption[];
        };
        shortcode: string;
        edge_media_to_comment: {
            count: number;
        };
        taken_at_timestamp: DOMTimeStamp;
        dimensions: {
            width: number;
            height: number;
        };
        display_url: string;
        edge_liked_by: {
            count: number;
        };
        edge_media_preview_like: {
            count: number;
        };
        owner: {
            id: string;
        };
        thumbnail_src: string;
        thumbnail_resources: IThumbnail[];
        is_video: boolean;
        accessibility_caption?: string | null;
        video_view_count?: number;
    };
}
export interface IMediaToCaption {
    node: {
        text: string;
    };
}
export interface ILocationResult {
    location: ILocationContent['graphql']['location'] | null;
    ok: boolean;
}
//# sourceMappingURL=location-page.d.ts.map