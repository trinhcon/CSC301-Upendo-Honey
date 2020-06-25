from web.models import (
    Batch,
    BatchMember,
    Beekeeper,
    Forest,
    Honey,
)
from rest_framework import serializers


class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = ['forest', 'honey']


class BatchMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatchMember
        fields = ['alphanum_code', 'batch', 'beekeeper', 'logo', 'external_url']


class BeekeeperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beekeeper
        fields = ['name', 'bio', 'photo', 'letter_text', 'letter_photo']


class ForestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forest
        fields = ['title', 'map_kml', 'description', 'photo', 'area', 'animals', 'beekeeper_count', 'plants']


class HoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Honey
        fields = ['name', 'variety', 'jar_photo', 'harvest_photo', 'honey_description', 'harvest_description', 'health_description']
