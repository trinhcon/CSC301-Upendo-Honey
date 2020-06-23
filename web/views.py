from django.shortcuts import render

from web.models import (
    Batch,
    BatchMember,
    Beekeeper,
    Forest,
    Honey,
)
from rest_framework import viewsets
from web.serializers import (
    BatchSerializer,
    BatchMemberSerializer,
    BeekeeperSerializer,
    ForestSerializer,
    HoneySerializer,
)

def index(request):
    return render(request, 'index.html')

class BatchViewSet(viewsets.ModelViewSet):
    queryset = Batch.objects.all()
    serializer_class = BatchSerializer


class BatchMemberViewSet(viewsets.ModelViewSet):
    queryset = BatchMember.objects.all().order_by('alphanum_code')
    serializer_class = BatchMemberSerializer


class BeekeeperViewSet(viewsets.ModelViewSet):
    queryset = Beekeeper.objects.all()
    serializer_class = BeekeeperSerializer


class ForestViewSet(viewsets.ModelViewSet):
    queryset = Forest.objects.all()
    serializer_class = ForestSerializer


class HoneyViewSet(viewsets.ModelViewSet):
    queryset = Honey.objects.all()
    serializer_class = HoneySerializer
