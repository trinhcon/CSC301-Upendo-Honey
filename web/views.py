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
