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
        fields = ['alphanum_code', 'batch', 'beekeeper', 'photo', 'external_url']


class BeekeeperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beekeeper
        fields = ['name', 'bio', 'image_url', 'letter_text', 'letter_img_url', 'photo']


class ForestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forest
        fields = ['title', 'map_url', 'description', 'image_url', 'area', 'animals', 'beekeeper_count', 'plants']


class HoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Honey
        fields = ['name', 'variety', 'jar_img_url', 'harvest_img_url', 'honey_description', 'harvest_description', 'health_description']
