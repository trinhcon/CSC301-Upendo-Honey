import json

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views.generic import DetailView

from web.models import Batch, BatchMember, Beekeeper


class BatchDetail(DetailView):
    model = Batch


def index(request):
    return render(request, 'index.html')


def batch_detail(request, batch_id):
    batch = get_object_or_404(Batch, pk=batch_id)
    return render(request, 'batch_detail.html', context={'batch': batch})


def get_batch_member(request, alphanum_code):
    batch_member = get_object_or_404(BatchMember, alphanum_code=alphanum_code)
    response = {
        'batch_member': batch_member.id,
        'forest': batch_member.batch.forest_id,
        'honey': batch_member.batch.honey_id,
        'beekeeper': batch_member.beekeeper_id,
    }
    return HttpResponse(json.dumps(response, indent=2), content_type="application/json")


def get_beekeeper(request, beekeeper_id):
    beekeeper = get_object_or_404(Beekeeper, pk=beekeeper_id)
    response = {
        'name': beekeeper.name,
        'bio': beekeeper.bio,
        'image_url': beekeeper.image_url,
        'letter_text': beekeeper.letter_text,
        'letter_img_url': beekeeper.letter_img_url,

    }
    return HttpResponse(json.dumps(response, indent=2), content_type="application/json")
