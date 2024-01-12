import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../../core/root.state';
import { addCustomItem } from '../../state/youtube.actions';
import { IYoutubeItem, IYoutubeThumbnail } from '../../models/youtube-search';
import { dateValidator } from '../../validators/date.validator';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export class CustomItemComponent {
  protected createItemForm = this.fb.group({
    title: ['', [Validators.required, Validators.max(20), Validators.min(3)]],
    description: ['', Validators.max(255)],
    img: ['', Validators.required],
    link: ['', Validators.required],
    creationDate: ['', [Validators.required, dateValidator]],
    tags: this.fb.array([this.fb.control('', Validators.required)]),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  get title(): AbstractControl {
    return this.createItemForm.get('title')!;
  }

  get description(): AbstractControl {
    return this.createItemForm.get('description')!;
  }

  get img(): AbstractControl {
    return this.createItemForm.get('img')!;
  }

  get link(): AbstractControl {
    return this.createItemForm.get('link')!;
  }

  get tags(): FormArray {
    return this.createItemForm.get('tags') as FormArray;
  }

  addTag(): void {
    const tags = this.createItemForm.get('tags') as FormArray;
    if (tags.length < 5) {
      tags.push(this.fb.control('', Validators.required));
    }
  }

  resetForm(): void {
    this.createItemForm.reset();
    this.tags.clear();
    this.tags.push(this.fb.control('', Validators.required));
  }

  submitForm(): void {
    const itemThumbnail: Partial<IYoutubeThumbnail> = {
      url: this.createItemForm.value.img as string,
    };
    const customItem: Partial<IYoutubeItem> = {
      id: {
        kind: 'youtube#video',
        videoId: `custom-item${Math.floor(Math.random() * 1001)}`,
      },
      snippet: {
        title: this.createItemForm.value.title as string,
        description: this.createItemForm.value.description as string,
        publishedAt: String(new Date().getTime()),
        channelId: '',
        thumbnails: {
          default: itemThumbnail as IYoutubeThumbnail,
          medium: itemThumbnail as IYoutubeThumbnail,
          high: itemThumbnail as IYoutubeThumbnail,
        },
      },
      isCustom: true,
    };
    this.store.dispatch(addCustomItem({ item: customItem }));
    this.router.navigate(['/search']);
  }
}
