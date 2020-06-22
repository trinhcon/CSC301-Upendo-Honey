from web.models import (
    Batch,
    BatchMember,
    Beekeeper,
    Forest,
    Honey,
)
from rest_framework import serializers


class BatchSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Batch
        fields = ['forest', 'honey']


class BatchMemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BatchMember
        fields = ['alphanum_code', 'batch', 'beekeeper']


class BeekeeperSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Beekeeper
        fields = ['name', 'bio', 'image_url', 'letter_text', 'letter_img_url', 'photo']


class ForestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Forest
        fields = ['title', 'map_url', 'description', 'image_url', 'area', 'animals', 'beekeeper_count', 'plants']


class HoneySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Honey
        fields = ['name', 'variety', 'jar_img_url', 'harvest_img_url', 'honey_description', 'harvest_description', 'health_description']
