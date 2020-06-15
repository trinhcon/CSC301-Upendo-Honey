import json

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views.generic import DetailView

from web.models import Batch


class BatchDetail(DetailView):
    model = Batch


def index(request):
    return render(request, 'index.html')


def batch_detail(request, batch_id):
    batch = get_object_or_404(Batch, pk=batch_id)
    return render(request, 'batch_detail.html', context={'batch': batch})


def get_batch(request, alphanum_code):
    batch = get_object_or_404(Batch, alphanum_code=alphanum_code)
    batchmembers = batch.batchmember_set.all()
    response = {
        'forest': batch.forest_id,
        'health': batch.health_id,
        'members': [member.beekeeper_id for member in batchmembers]
    }
    return HttpResponse(json.dumps(response, indent=2), content_type="application/json")
